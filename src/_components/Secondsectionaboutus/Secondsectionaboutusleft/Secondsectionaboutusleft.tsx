import React from 'react'
import Secondsectionaboutusleftheader from './Secondsectionaboutusleftheader/Secondsectionaboutusleftheader'
import Secondsectionaboutusleftphararaph from './Secondsectionaboutusleftphararaph/Secondsectionaboutusleftphararaph'

export default function Secondsectionaboutusleft() {
  return <>
     <div className="order-2 lg:order-1 mt-5 ">
           <Secondsectionaboutusleftheader/>

            <Secondsectionaboutusleftphararaph/>
          </div>
  </>
}
