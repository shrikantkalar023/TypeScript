# **Learning TypeScript**

This is the repo i created and updated while learning TS. **-Shrikant Kalar**

## Notes

1. To run two cmds in windows powershell: tsc ; node dist/index.js
2. To dynamically assign properties to an object we use 'Index Signatures'.
3. 'Static member' belongs to CLASS, so only 1 instance of it in memory.
4. 'Super' keyword is used in inheriting child class in TS.
5. Add 'Override' keyword in front of method to override in objects and implement the method.
6. Open Closed Principle:- Classes should be open(inherit,extend) for 'extension' & closed for 'modification'.
7. Private vs Protected Members:- Protected members are inherited.
8. Abstract Classes: 'not-ready' to make objs from classes. Abstract Methods only inside Abstract classes.
9. Interface to define shape of object. We use 'implements' keyword to implement interface in class.
10. If we need some logic it is better to use classes, if we need only shape then use interfaces.
11. Complier infers generic types from the arguments passed.
12. Generics can be constrained by using 'extends' keyword to limit the types. We can use types, interfaces, classes as constraints.
