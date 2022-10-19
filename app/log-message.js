import colors from "colors";
colors.enable();

const throwError = (error, errorHeder) => {
  
  throw Error(
    colors.inverse.red(errorHeder ? errorHeder : "Error!") + colors.white(error? error : "")
  );
};

const logWarning = (warning, warningHeder) => {
  console.log(
    colors.inverse.yellow(warningHeder ? warningHeder : "Warning!"),
    colors.white(warning ? warning : "")
  );
};

const logNote = (note, noteHeder) => {
  console.log(
    colors.inverse.blue(noteHeder ? noteHeder : "Note"),
    colors.white(note ? note : "")
  );
}


export { throwError, logWarning, logNote };
