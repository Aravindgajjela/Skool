import React, { Component } from "react";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      // Multiple Choice Questions (Python related)
      mcqQuestions: [
        {
          question: "What is the output of print(2 + 2)?",
          options: ["2", "4", "22", "Error"],
          correctAnswer: "4",
          userAnswer: "",
          answered: false,
        },
        {
          question: "Which data type is used to store decimals in Python?",
          options: ["int", "str", "float", "bool"],
          correctAnswer: "float",
          userAnswer: "",
          answered: false,
        },
        {
          question: "How do you create a variable in Python?",
          options: ["variable = 10", "int x = 10", "x = 10;", "create x = 10"],
          correctAnswer: "variable = 10",
          userAnswer: "",
          answered: false,
        },
        {
          question: "What is the correct way to define a function in Python?",
          options: [
            "def myFunction()",
            "function myFunction()",
            "function: myFunction()",
            "def: myFunction()",
          ],
          correctAnswer: "def myFunction()",
          userAnswer: "",
          answered: false,
        },
        {
          question: "Which of the following is used for comments in Python?",
          options: ["//", "#", "/* */", "<!-- -->"],
          correctAnswer: "#",
          userAnswer: "",
          answered: false,
        },
        {
          question: "Which method is used to convert a string to lowercase in Python?",
          options: ["lower()", "down()", "lcase()", "lowercase()"],
          correctAnswer: "lower()",
          userAnswer: "",
          answered: false,
        },
        {
          question: "How do you create a list in Python?",
          options: ["list = ()", "list = []", "list = {}", "list = <>"],
          correctAnswer: "list = []",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Which of the following is not a valid variable name in Python?",
          options: ["_var", "var_1", "2var", "var2"],
          correctAnswer: "2var",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "What is the output of the expression 3 * 2 + 1 in Python?",
          options: ["7", "5", "8", "6"],
          correctAnswer: "7",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Which of the following is used to create an infinite loop in Python?",
          options: ["while True:", "for True:", "do while:", "for(;;)"],
          correctAnswer: "while True:",
          userAnswer: "",
          answered: false,
        },
        {
          question: "How do you access the second element of a list in Python?",
          options: ["list[1]", "list[2]", "list(2)", "list{2}"],
          correctAnswer: "list[1]",
          userAnswer: "",
          answered: false,
        },
        {
          question: "Which function is used to get the length of a list in Python?",
          options: ["length()", "len()", "size()", "count()"],
          correctAnswer: "len()",
          userAnswer: "",
          answered: false,
        },
        {
          question: "What does the Python `break` statement do?",
          options: [
            "Exits the current loop",
            "Stops the program",
            "Goes to the next iteration",
            "None of the above",
          ],
          correctAnswer: "Exits the current loop",
          userAnswer: "",
          answered: false,
        },
        {
          question: "What is the correct syntax for defining a function in Python?",
          options: [
            "def function_name()",
            "function function_name()",
            "define function_name()",
            "function = name()",
          ],
          correctAnswer: "def function_name()",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Which of the following is used to handle exceptions in Python?",
          options: ["try", "catch", "finally", "except"],
          correctAnswer: "try",
          userAnswer: "",
          answered: false,
        },
        {
          question: "Which operator is used to divide numbers in Python?",
          options: ["//", "%", "/", "#"],
          correctAnswer: "/",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "What is the output of print('Hello' + 'World') in Python?",
          options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
          correctAnswer: "HelloWorld",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Which of the following is the correct way to import a module in Python?",
          options: [
            "import module_name",
            "require module_name",
            "load module_name",
            "use module_name",
          ],
          correctAnswer: "import module_name",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Which method is used to add an element to a set in Python?",
          options: ["add()", "append()", "insert()", "push()"],
          correctAnswer: "add()",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Which of the following is an immutable data type in Python?",
          options: ["list", "set", "tuple", "dict"],
          correctAnswer: "tuple",
          userAnswer: "",
          answered: false,
        },
        {
          question: "Which of the following will return the value 2?",
          options: ["2 % 2", "4 / 2", "4 // 2", "2 * 1"],
          correctAnswer: "4 / 2",
          userAnswer: "",
          answered: false,
        },
        {
          question: "Which keyword is used to create a class in Python?",
          options: ["create", "class", "def", "object"],
          correctAnswer: "class",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Which of the following will give you the absolute value of -5 in Python?",
          options: ["abs(-5)", "abs(5)", "fabs(-5)", "None of the above"],
          correctAnswer: "abs(-5)",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Which of the following is the correct way to write a dictionary in Python?",
          options: [
            "dict = {1: 'apple', 2: 'banana'}",
            "dict = [1: 'apple', 2: 'banana']",
            "dict = (1: 'apple', 2: 'banana')",
            "dict = 'apple', 'banana'",
          ],
          correctAnswer: "dict = {1: 'apple', 2: 'banana'}",
          userAnswer: "",
          answered: false,
        },
      ],
      // Fill-in-the-Blank Questions (Python related)
      fillBlankQuestions: [
        {
          question: "In Python, the function ___ is used to get user input.",
          options: ["input()", "scan()", "read()", "get()"],
          correctAnswer: "input()",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "A variable in Python can hold data like numbers, strings, and ___.",
          options: ["lists", "loops", "functions", "modules"],
          correctAnswer: "lists",
          userAnswer: "",
          answered: false,
        },
        {
          question: "The operator ___ is used to check equality in Python.",
          options: ["=", "==", "=", "!"],
          correctAnswer: "==",
          userAnswer: "",
          answered: false,
        },
        {
          question: "The Python list method to add an item is ___.",
          options: ["add()", "append()", "insert()", "extend()"],
          correctAnswer: "append()",
          userAnswer: "",
          answered: false,
        },
        {
          question: "To create a class in Python, you use the keyword ___.",
          options: ["class", "create", "function", "def"],
          correctAnswer: "class",
          userAnswer: "",
          answered: false,
        },
        {
          question: "To create a class in Python, you use the keyword ___.",
          options: ["class", "create", "function", "def"],
          correctAnswer: "class",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "The function used to get the length of a list in Python is ___.",
          options: ["size()", "length()", "len()", "count()"],
          correctAnswer: "len()",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "A variable inside a class but outside any function is called a ___.",
          options: [
            "class variable",
            "global variable",
            "instance variable",
            "local variable",
          ],
          correctAnswer: "class variable",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "To check if a key exists in a dictionary, use the ___ keyword.",
          options: ["has()", "exists()", "in", "find()"],
          correctAnswer: "in",
          userAnswer: "",
          answered: false,
        },
        {
          question: "The Python keyword used to handle exceptions is ___.",
          options: ["try", "catch", "error", "except"],
          correctAnswer: "try",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "In Python, the function used to read input from the user is ___.",
          options: ["input()", "read()", "scan()", "get()"],
          correctAnswer: "input()",
          userAnswer: "",
          answered: false,
        },
        {
          question: "A list in Python is defined using ___.",
          options: ["{}", "[]", "()", "<>"],
          correctAnswer: "[]",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "The keyword used to define a function in Python is ___.",
          options: ["define", "func", "def", "function"],
          correctAnswer: "def",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "The loop used to iterate over a sequence in Python is the ___ loop.",
          options: ["for", "while", "do-while", "repeat"],
          correctAnswer: "for",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "To remove the last item from a list in Python, we use the ___ method.",
          options: ["delete()", "remove()", "pop()", "drop()"],
          correctAnswer: "pop()",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "Python is an ___-level programming language.",
          options: ["high", "low", "mid", "machine"],
          correctAnswer: "high",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "The statement used to exit a loop early is ___.",
          options: ["stop", "exit", "break", "return"],
          correctAnswer: "break",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "The special method used to initialize an object in Python is ___.",
          options: [
            "__start__",
            "__init__",
            "__main__",
            "__object__",
          ],
          correctAnswer: "__init__",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "A tuple is different from a list because it is ___.",
          options: ["mutable", "sorted", "immutable", "dynamic"],
          correctAnswer: "immutable",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "In Python, comments start with the symbol ___.",
          options: ["//", "/*", "#", "--"],
          correctAnswer: "#",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "The operator used for exponentiation in Python is ___.",
          options: ["^", "**", "^^", "//"],
          correctAnswer: "**",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "To open a file in read mode, we use the mode ___.",
          options: ["w", "a", "r", "x"],
          correctAnswer: "r",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "To check the data type of a variable, we use the ___ function.",
          options: ["typeof()", "gettype()", "type()", "datatype()"],
          correctAnswer: "type()",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "The function used to convert a string into an integer is ___.",
          options: ["int()", "toInt()", "parseInt()", "integer()"],
          correctAnswer: "int()",
          userAnswer: "",
          answered: false,
        },
        {
          question:
            "The logical operator that represents 'AND' in Python is ___.",
          options: ["&", "and", "&&", "AND"],
          correctAnswer: "and",
          userAnswer: "",
          answered: false,
        },
      ],
      currentMCQ: 0,
      currentFillBlank: 0,
      quizType: "mcq", // You can change the quiz type to "fillBlank" or "mcq"
      correctAnswersMCQ: 0,
      wrongAnswersMCQ: 0,
      correctAnswersFillBlank: 0,
      wrongAnswersFillBlank: 0,
    };
  }

  handleMCQAnswer = (answer) => {
    const { currentMCQ, mcqQuestions } = this.state;
    const question = mcqQuestions[currentMCQ];
    if (!question.answered) {
      question.userAnswer = answer;
      question.answered = true;

      if (answer === question.correctAnswer) {
        this.setState((prevState) => ({
          correctAnswersMCQ: prevState.correctAnswersMCQ + 1,
        }));
        alert("Correct Answer!");
      } else {
        this.setState((prevState) => ({
          wrongAnswersMCQ: prevState.wrongAnswersMCQ + 1,
        }));
        alert(`Incorrect! The correct answer is ${question.correctAnswer}`);
      }

      this.setState({
        mcqQuestions: [...mcqQuestions],
        currentMCQ: currentMCQ + 1, // Move to next question
      });
    }
  };

  handleFillBlankAnswer = (answer) => {
    const { currentFillBlank, fillBlankQuestions } = this.state;
    const question = fillBlankQuestions[currentFillBlank];
    if (!question.answered) {
      question.userAnswer = answer;
      question.answered = true;

      if (answer === question.correctAnswer) {
        this.setState((prevState) => ({
          correctAnswersFillBlank: prevState.correctAnswersFillBlank + 1,
        }));
        alert("Correct Answer!");
      } else {
        this.setState((prevState) => ({
          wrongAnswersFillBlank: prevState.wrongAnswersFillBlank + 1,
        }));
        alert(`Incorrect! The correct answer is ${question.correctAnswer}`);
      }

      this.setState({
        fillBlankQuestions: [...fillBlankQuestions],
        currentFillBlank: currentFillBlank + 1, // Move to next question
      });
    }
  };

  switchQuizType = () => {
    this.setState((prevState) => ({
      quizType: prevState.quizType === "mcq" ? "fillBlank" : "mcq",
    }));
  };

  render() {
    const {
      mcqQuestions,
      fillBlankQuestions,
      currentMCQ,
      currentFillBlank,
      quizType,
      correctAnswersMCQ,
      wrongAnswersMCQ,
      correctAnswersFillBlank,
      wrongAnswersFillBlank,
    } = this.state;

    return (
      <div style={styles.quizContainer}>
        <h1 style={styles.heading}>Python Quiz</h1>

        {/* Display MCQs or Fill-in-the-Blank questions based on quizType */}
        {quizType === "mcq" && currentMCQ < mcqQuestions.length ? (
          <div style={styles.mcqContainer}>
            <p style={styles.questionText}>
              {/* Adding question number before the question */}
              Question {currentMCQ + 1}: {mcqQuestions[currentMCQ].question}
            </p>
            <div style={styles.optionsContainer}>
              {mcqQuestions[currentMCQ].options.map((option, index) => (
                <button
                  key={index}
                  style={styles.optionButton}
                  onClick={() => this.handleMCQAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : quizType === "mcq" ? (
          <div style={styles.endText}>
            You have completed all multiple-choice questions!
            <br />
            Correct Answers: {correctAnswersMCQ}
            <br />
            Wrong Answers: {wrongAnswersMCQ}
          </div>
        ) : null}

        {quizType === "fillBlank" && currentFillBlank < fillBlankQuestions.length ? (
          <div style={styles.fillBlankContainer}>
            <p style={styles.questionText}>
              {/* Adding question number before the question */}
              Question {currentFillBlank + 1}: {fillBlankQuestions[currentFillBlank].question}
            </p>
            <div style={styles.optionsContainer}>
              {fillBlankQuestions[currentFillBlank].options.map((option, index) => (
                <button
                  key={index}
                  style={styles.optionButton}
                  onClick={() => this.handleFillBlankAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : quizType === "fillBlank" ? (
          <div style={styles.endText}>
            You have completed all fill-in-the-blank questions!
            <br />
            Correct Answers: {correctAnswersFillBlank}
            <br />
            Wrong Answers: {wrongAnswersFillBlank}
          </div>
        ) : null}

        {/* Switch Button to toggle between MCQs and Fill-in-the-Blank */}
        <button style={styles.switchButton} onClick={this.switchQuizType}>
          Switch to {quizType === "mcq" ? "Fill-in-the-Blank" : "Multiple Choice"} Questions
        </button>
      </div>
    );
  }
}

const styles = {
  quizContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#F7F3F7",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
  },
  heading: {
    fontSize: "32px",
    color: "#FF6F61",
    marginBottom: "20px",
  },
  mcqContainer: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  fillBlankContainer: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
  },
  questionText: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  optionButton: {
    backgroundColor: "#FF6F61",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  endText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#FF6F61",
  },
  switchButton: {
    backgroundColor: "#FF3D00",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "10px",
    marginTop: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Quiz;
