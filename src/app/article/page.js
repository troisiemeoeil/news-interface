"use client";

import React, { Suspense } from "react";
import InterfaceLayout from "@/components/interface-layout";
import SingleArticleContent from "@/components/single-article-content";

export default function PageWrapper() {
  return (
    <InterfaceLayout>
      <Suspense fallback={<div className="text-center py-8">Loading article...</div>}>
        <SingleArticleContent />
      </Suspense>
    </InterfaceLayout>
  );
}
