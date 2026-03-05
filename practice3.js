let counter = 0;
let option;
do {
    option = parseInt(prompt(
        "Current Counter: " + counter + "\n" +
        "1. Increment counter\n" +
        "2. Decrement counter\n" +
        "4. Exit\n\n" 
    ));
    switch(option){
        case 1:
            counter ++;
            break;
        case 2:
            counter--;
            break;
        case 3:
            alert("Exiting the program:..")
            break;
        default:
            alert("Invalie option")
            break;
    }

}while (option !== 4);