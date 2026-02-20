// customApi.js
const jsonServer = require('json-server');
const router = jsonServer.router('./data/db.json');

module.exports = (req, res, next) => {
  const pathsegments = req.path.split('/');
  const segmentone = pathsegments[2];
  const id = pathsegments[3];

  const db = router.db.getState(); // get db.json file
  const projectcur = db.projects.find(project => project.id === id);

  if (pathsegments.length > 4) {
    if (req.url === `/api/${segmentone}/${id}/word-template`) {
      const resp = {
        'word-template': projectcur['word-template']
      }
      return res.json(resp);
    }
    else if (req.url === `/api/${segmentone}/${id}/descriptions`) {
      const resp = {
        'descriptions': projectcur['descriptions']
      }
      return res.json(resp);
    }
    else if (req.url === `/api/${segmentone}/${id}/bank-additionalities`) {
      const resp = {
        'bank-additionalities': projectcur['bank-additionalities']
      }
      return res.json(resp);
    }
    else if (req.url === `/api/${segmentone}/${id}/costs-and-financing-structure`) {
      const resp = {
        'costs-and-financing-structure': projectcur['costs-and-financing-structure']
      }
      return res.json(resp);
    }
    else if (req.url === `/api/${segmentone}/${id}/risks`) {
      const resp = {
        'risks': projectcur['risks']
      }
      return res.json(resp);
    }
    else if (req.url === `/api/${segmentone}/${id}/implementation-arrangements-summary`) {
      const resp = {
        'implementation-arrangements-summary': projectcur['implementation-arrangements-summary']
      }
      return res.json(resp);
    }
    else if (req.url === `/api/${segmentone}/${id}/resources-and-preparation-scheduleds`) {
      const resp = {
        'resources-and-preparation-scheduleds': projectcur['resources-and-preparation-scheduleds']
      }
      return res.json(resp);
    }
    else if (req.url === `/api/${segmentone}/${id}/comments`) {
      const resp = {
        'comments': projectcur['comments']
      }
      return res.json(resp);
    }
    

  }

  next(); // Pass control to the next middleware or route handler
};