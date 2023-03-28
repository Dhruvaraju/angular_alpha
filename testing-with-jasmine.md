## Testing using Jasmine
- Jasmine and karma are used for executing tests.
- Tests are written in a file named as <<file-name>>.spec.ts. Example login-component.ts will have login-component.spec.ts.
- describe and it are the functions used to write a test case
    - **describe** used for defining test-suite.
    - **it** for defining a spec or a test
```javascript
describe('<<TestSuite Name>>',() => {
    it('<<Test Name>>', () => {
        const result = <<method-name-inputs>>;
        expect(result).toBe(<<Expected-Result>>);
    })
})
//if it works test will be successful else the test will fail
```
> Provide proper names for test suite and the test names so you know what you are testing next time.
- To execute test you have to run ```ng test```
- General rule for testing is arrange asset and act.

## Writing test script for a component
- import the component and check for the component values once the test is done

