class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2=createInput("Enter Your answer Here...")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
     this.question=createElement("h3")
    this.options1=createElement("h4")
    this.options2=createElement("h4")
    this.options3=createElement("h4")
    this.options4=createElement("h4")

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter?")
    this.question.position(150,80)
    //4 options
    this.options1.html("1. Everyone")
    this.options1.position(150,100)
    this.options2.html("2. Envelope")
    this.options2.position(150,120)
    this.options3.html("3. Estimate")
    this.options3.position(150,140)
    this.options4.html("4. Example")
    this.options4.position(150,160)

    this.input1.position(150, 230);
    this.input2.position(350,230)
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted")
      this.message.position(150,350)

    })


  }
}
