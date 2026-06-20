import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const Apply: React.FC = () => {
  const applicationFormUrl = "";
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <PageHeader title="APPLY" />
        
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#C8102E] text-white px-4 py-2 mb-6">
              <h2 className="text-xl font-bold">Applications Closed: Open</h2>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We are currently closed to external applicants
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
             This will remain in place for the foreseeable future
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              label="This Button Does Nothing" 
              variant="primary" 
              size="lg" 
              href={applicationFormUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
