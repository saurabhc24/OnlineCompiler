const { exec } = require("child_process");


const executePython = ([filepath, inputFilePath]) => {
    return new Promise((resolve, reject) => {
        exec(
            `python ${filepath} ${inputFilePath}`,
            (error, stdout, stderr) => {
                if (error) reject({ error, stderr });
                if (stderr) reject({ stderr });
                resolve(stdout);
            }
        );
    });
};

module.exports = {
    executePython,
};
