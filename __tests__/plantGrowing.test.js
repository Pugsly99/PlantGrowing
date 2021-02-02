import {storeState, changeState} from '../src/js/plantGrowing';

describe('State Change Function', () => {

  const stateControl = storeState();
  
  beforeEach(() => {
  });

  test('Should increment a property of a object by the input value', () => {
    let plant = { soil: 0, light: 0, water: 0 };
    const soil = changeState("soil")(1);
    expect(soil(plant)).toEqual({ soil: 1, light: 0, water: 0 });
  }); 

  test('Should save a incremented property of a object', () => {
    const soil = changeState("soil")(1);
    const fedPlant = stateControl(soil);
    soil(fedPlant);
    expect(fedPlant.soil).toEqual(1);
  });

});

