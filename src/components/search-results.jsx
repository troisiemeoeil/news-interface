"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import Link from "next/link";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch matching articles as user types
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      axios
        .get(`/api/article-suggestions?q=${encodeURIComponent(query)}`)
        .then((res) => setSuggestions(res.data.articles || []))
        .catch((err) => console.error(err));
    }, 300); 

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center gap-2">
        <Search size={20} color="black" fontWeight="bold" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 text-black border border-zinc-400 rounded-xl py-1 px-2"
          placeholder="Search articles..."
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-zinc-300 rounded-lg mt-1 shadow-lg z-50 max-h-64 overflow-y-auto">
          {suggestions.map((article) => (
            <li key={article.title} className="p-2 hover:bg-zinc-100">
              <Link
                href={`/article?title=${encodeURIComponent(article.title)}&url=${encodeURIComponent(article.url)}&urlToImg=${encodeURIComponent(article.urlToImage)}&content=${article.content}&source=${article.source.name}&author=${article.author}&date=${new Date(article.publishedAt).toLocaleDateString()}`}
                className="flex items-center gap-2"
              >
                <img
                  src={article.urlToImage || "/missing.jpg"}
                  alt={article.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <span className="text-sm text-black">{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
