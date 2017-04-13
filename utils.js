
export function imageFor(path){
  // this is a workaround when using static images that are not loaded as assets,
  // currently all are just the same image but you should crop out the proper
  // images and save them in /assets/images/

  const imageLocationMap = {
    'image1.png': require('./assets/images/image1.png'),
    'image2.png': require('./assets/images/image2.png'),
    'image3.png': require('./assets/images/image3.png'),
    'image4.png': require('./assets/images/image4.png'),
    'image5.png': require('./assets/images/image5.png'),
    'image6.png': require('./assets/images/image6.png'),
  };

  return imageLocationMap[path];
}
