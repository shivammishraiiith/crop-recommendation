import * as tf from '@tensorflow/tfjs';

    //model =  await tf.loadModel('indexeddb://my-model-1');
    model =  await tf.loadModel('https://raw.githubusercontent.com/shivammishraiiith/crop-recommendation/master/model.json');
    //model =  await tf.loadModel('tfjsversion/model.json');
    console.log('model loaded from storage');
