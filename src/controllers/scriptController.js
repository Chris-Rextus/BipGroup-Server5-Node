const { exec } = require('child_process');
const path = require('path');

const runPythonScript = (req, res) => {
  const { scriptName, args } = req.body;

  if (!scriptName) {
    return res.status(400).json({ message: 'Script name is required' });
  }

  const scriptPath = path.join(__dirname, '..', 'scripts', scriptName);

  const command = `python3 ${scriptPath} ${args ? args.join(' ') : ''}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }

    if (stderr) {
      console.error(`Python stderr: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }

    return res.status(200).json({ output: stdout.trim() });
  });
};

module.exports = { runPythonScript };
