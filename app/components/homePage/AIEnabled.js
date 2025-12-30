import React from 'react';

const AIEnabled = () => {
  const categories = [
    {
      title: 'Data Analytics​',
      description: 'AI-driven insights for campaign optimization and performance tracking​'
    },
    {
      title: 'Marketing Automation​',
      description: 'Automated workflows and intelligent campaign management​.'
    },
    {
      title: 'Content Generation​',
      description: 'AI-powered content creation and personalization strategies​.'
    },
   
  ];

  return (
    <div className="min-h-screen bg-secondary text-primary py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary">
           AI-Enabled Marketing​
          </h2>
          <p className="text-xl md:text-2xl text-primary/70 max-w-4xl mx-auto leading-relaxed mb-12">
            CodeWork AI provides an integrated family of development tools to meet the needs of different development communities.
          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-8 bg-secondary/70 border border-primary/10 hover:bg-secondary/60 transition-all duration-300 rounded-none h-full flex flex-col`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {category.title}
              </h2>
              <p className="text-primary/70 text-base leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIEnabled;
