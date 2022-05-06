import React from 'react';

export default function ProjectDetails(){
     return(
          <div className="dark:bg-[#202020] dark:text-white">
               Project Details
          </div>
     )
}

export async function getServerSideProps({ req, res }) {
     return {
       props:{
            
       }
     };
   }
   