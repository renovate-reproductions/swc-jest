# swc-jest
reproduce a swc jest bug


a swc decorator bug, moving the decorator below the tsdoc comment works as expected

*fails*
```ts
const printMemberName = (target: any, memberName: string) => {
    console.log(memberName);
  };

class TestClass {


  @printMemberName
  /**
   * some tsdoc comments
   * 
   * Some more comments
   * over
   * multiple
   * lines
   */
  async run(): Promise<boolean> {
    return await Promise.resolve(true);
  }
}
```


*works*
```ts
const printMemberName = (target: any, memberName: string) => {
    console.log(memberName);
  };

class TestClass {

  /**
   * some tsdoc comments
   * 
   * Some more comments
   * over
   * multiple
   * lines
   */
  @printMemberName
  async run(): Promise<boolean> {
    return await Promise.resolve(true);
  }
}
```