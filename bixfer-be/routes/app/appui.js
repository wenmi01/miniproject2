var express = require("express");
var router = express.Router();

let docs = [
  {
    id: 1,
    first_name: "Jan",
    last_name: "Tapos",
    receiver_first_name: "Avril",
    receiver_last_name: "Delayna",
    transition_text:
      "See document 213819 on File cabinet 12321 with key on table 1381.",
  },
  {
    id: 2,
    first_name: "Juana",
    last_name: "dela Cruz",
    receiver_first_name: "Roberto",
    receiver_last_name: "Gaspar",
    transition_text:
      "Open book 33312 at shelf 17236, the password is kept at drive D of server yuyu-hakusho",
  },
  {
    id: 3,
    first_name: "Anabelle",
    last_name: "Santiago",
    receiver_first_name: "Jeffrey",
    receiver_last_name: "Ramos",
    transition_text:
      "Gate keys are always stored in the guard house.  No one is allowed to enter the gate at 11pm to 5am.",
  },
  {
    id: 4,
    first_name: "Hubert",
    last_name: "Long",
    receiver_first_name: "Neil",
    receiver_last_name: "Samson",
    transition_text:
      "Carry the planner with the voice recorder in all meetings with the big boss.",
  },
  {
    id: 5,
    first_name: "Charles",
    last_name: "Tukey",
    receiver_first_name: "Ashley",
    receiver_last_name: "Simons",
    transition_text:
      "Accounting logs should be kept at the file cabine 2512 near the fire extinguisher.  A blue book was located for the list of tax exemptions.",
  },
];

router.get("/", (req, res) => {
  res.send(docs);
});

router.get("/count/all", (req, res) => {
  res.status(200).send({ total: docs.length });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  let doc = docs.find((item) => {
    return item.id === Number(id);
  });
  res.status(200).send(doc ? doc : { status: "Record not found!" });
});

// router.get("/name/:keyword", (req, res) => {
//     const { keyword } = req.params;
//     const result = docs.filter(item=>item.name.toLowerCase().includes(keyword));
//     res.status(200).send( result.length > 0 ? result : keyword + " not found!");
// });

// router.get("/age/:age", (req, res) => {
//     const { age } = req.params;
//     const result = docs.filter(item=>item.age === Number(age));
//     if (result.length > 0) {
//       res.status(200).send(result);
//     } else {
//       res.status(200).send("Age "+ age + " not found!");
//     }
//   });

//   router.get("/gender/:gender", (req, res) => {
//     const { gender } = req.params;
//     const result = docs.filter(item=>item.gender === gender);

//     res.status(200).send( result.length > 0 ? result : gender + " not found!");
//   });

router.post("/docs", (req, res) => {
  let data = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    receiver_first_name: req.body.receiver_first_name,
    receiver_last_name: req.body.receiver_last_name,
    transition_text: req.body.transition_text,
  };
  docs.push(data);
  res.status(200).send(data);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  let doc = docs.find((item) => {
    return item.id === Number(id);
  });

  doc.first_name = req.body.first_name;
  doc.last_name = req.body.last_name;
  doc.receiver_first_name = req.body.receiver_first_name;
  doc.receiver_last_name = req.body.receiver_last_name;
  doc.transition_text = req.body.transition_text;

  res.status(200).send(doc);
});

// add doc
router.post("/:id", (req, res) => {
  const { id } = req.params;

  console.log(req.body);

  let lastItem = docs[docs.length - 1];
  console.log(req.body);
  let doc = {};

  // employee.id = employees[employees.length - 1].id + 1;
  doc.id = lastItem.id + 1;
  doc.first_name = req.body.first_name;
  doc.last_name = req.body.last_name;
  doc.receiver_first_name = req.body.receiver_first_name;
  doc.receiver_last_name = req.body.receiver_last_name;
  doc.transition_text = req.body.transition_text;

  // simulate adding data to object collection
  docs.push(doc);

  res.status(200).send(doc);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let docs_len = docs.length;
  docs = docs.filter((item) => item.id != Number(id));

  // res.status(200).send("Record " + id + " has been deleted.");

  // res.status(200).send({ status: "Record " + id + " has been deleted.", id: id} );

  docs_len != docs.length
    ? res
        .status(200)
        .send({ status: "Record " + id + " has been deleted.", id: id })
    : res.status(400).send("Record not found");
});

module.exports = router;
