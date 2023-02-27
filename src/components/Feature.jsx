import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../assests/feature_1.png';
import featureimage1 from '../assests/feature_2.png';
import featureimage2 from '../assests/feature_3.png';

const Feature = () => {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox img={featureimage} title='Development Course'/>
            <FeatureBox img={featureimage1} title='Money Savings'/>
            <FeatureBox img={featureimage2} title='Usability Interface'/>
        </div>
    </div>
  )
}

export default Feature