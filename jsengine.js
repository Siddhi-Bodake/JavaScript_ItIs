//javascript runtime environment
//env have the Js engine , API, Cq, MQ ,event loop and all 
//list of javascript engine : edge- chakra 
//fireforx- spider monkey, chrome- v8, safari-javascript core
//ECMAScript langiage stndard
//first JS engine is spider monkey

//javascript engine architecture : it is not a machine not a hardware .
//v8 engine written in C++
//v8 engine have two parts : 1. call stack 2. heap
//call stack is LIFO and heap is FIFO

//js engine  takes code and passed through 3 phases: 
//1. parsing
//2. compilation
//3. execution

//1. parsing
//it is the process of checking the syntax of the code and converting it into the abstract syntax tree
//AST is the tree representation of the code
//in parsing it will check the syntax of the code and convert it into the abstract syntax tree

//2. compilation
//it is the process of converting the abstract syntax tree into the machine code
//in compilation it will check the syntax of the code and convert it into the machine code

//3. execution
//in execution it will execute the code and convert it into the machine code

//in compilation it will create the execution context
//in execution it will execute the code and convert it into the machine code

//memory heap and call stackand garbage collection are the part of js engine
//mark and sweap algorithm is used for garbage collection
//in garbage collection it will mark the objects which are not in use and remove them
//in heap memory it will store the objects and functions

//inline cache , copy elision, inlining

//read v8 blog..and in v8 we have  interpreter called ignition and compiler called turbo fan
//in ignition it will convert the AST into the bytecode and in turbo fan it will convert the bytecode into the machine code
//use garbage collector known as orinoco and oilpan