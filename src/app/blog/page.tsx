import React from 'react'
import SectionTitle from '@/components/Core/SectionTitle/SectionTitle'
import OurTeam from "@/components/Generic/Section/OurTeam/OurTeam"
import NewsArticleSection from '@/components/Generic/Section/NewsArticleSection/NewsArticleSection'

const page = () => {
  return (
    <main className="main-section-wrapper">
      <SectionTitle
        title="News & Articles"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        showSearchBar={true}
      />
       <div className="news-article-section-wrapper">
        <NewsArticleSection />
      </div>
    </main>
  )
}

export default page