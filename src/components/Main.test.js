import  {initializeTimes, updateTimes} from "./Main";


const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test('Initializes the correct times', () => {
    expect(initializeTimes()).toEqual(expectedTimes);
})

test('Updates based on state', () => {
  expect(updateTimes({type: "UPDATE_TIMES", payload: "tomorrow"})).toEqual(expectedTimes);
})