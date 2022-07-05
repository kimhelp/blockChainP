const pool = require("../../Database/db.js").pool;

exports.newBlock = async (req, res) => {
  console.log(req.body);
  const { number, parentHash, stateRoot, hash, difficulty, nonce, timestamp } =
    req.body;
  const sql = `INSERT INTO block (number, parentHash, stateRoot, hash, difficulty, nonce, timestamp) values(?,?,?,?,?,?,?)`;
  const prepare = [
    number,
    parentHash,
    stateRoot,
    hash,
    difficulty,
    nonce,
    timestamp,
  ];
  let response = {
    result: [],
    errno: 0,
  };
  try {
    const [result] = await pool.execute(sql, prepare);

    response = {
      ...response,
      result: {
        affectedRows: result.affectedRows,
        insertId: result.insertId,
      },
    };
  } catch (e) {
    console.log(e.message);
    response = {
      errno: 1,
    };
  }
  res.json(response);
};

exports.blockList = async (req, res) => {
  const sql = `select * from block Limit 0,20`;

  try {
    const [result] = await pool.execute(sql);
    let response = {
      errno: 1,
    };
    response = {
      ...response,
      result,
    };
    res.json(response);
  } catch (e) {
    console.log(e.message);
    response = {
      errno: 1,
    };
    res.json(response);
  }
};

exports.search = async (req, res) => {
  const { data } = req.body;
  const sql = `SELECT * FROM block WHERE hash='${data}'`;

  try {
    const [result] = await pool.execute(sql);
    // console.log(result);
    let response = {
      errno: 1,
    };
    response = {
      ...response,
      result,
      errno: 0,
    };
    res.json(response);
  } catch (e) {
    console.log(e.message);
    response = {
      errno: 1,
    };
    res.json(response);
  }
};

exports.searchList = async (req, res) => {
  console.log(req.body);
  const { idx } = req.body;

  const sql = `SELECT * FROM block WHERE number='${idx}'`;

  try {
    const [result] = await pool.execute(sql);
    console.log(result);
    let response = {
      errno: 1,
    };
    response = {
      ...response,
      result,
      errno: 0,
    };
    res.json(response);
  } catch (e) {
    console.log(e.message);
    response = {
      errno: 1,
    };
    res.json(response);
  }
};
