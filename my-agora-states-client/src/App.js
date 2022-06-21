import { Form, Discussions } from './components'
import { useEffect, useState } from "react";

function App() {
  const domain = 'http://localhost:3001'
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    getDiscussion();
  }, [])

  const getDiscussion = (() => {
    return fetch((domain + '/discussions'))
    .then((res) => res.json())
    .then((data) => {
      setDiscussions(data)
    })
  })

  const addDiscussion = ({ title, author, bodyText }) => {
    const newDiscussion = {
      id: "unique id",
      createdAt: new Date().toISOString(),
      title: title,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions",
      author: author,
      answer: null,
      bodyHTML: bodyText,
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    };
    fetch(domain + '/discussions/', { 
      method: 'POST', 
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDiscussion) })
    .then((res) => {
      if (res.status === 201) {
        getDiscussion()
      }
    })
  }

  const deleteDiscussion = ((id) => {
    fetch(domain + `/discussions/${id}`, { 
        method: 'DELETE', 
      })
    .then((res) => {
      if (res.status === 202 || 204) {
        getDiscussion()
      }
    })
  }) 

  return (
    <>
      <h1>My Agora States</h1>
      <Form addDiscussion={addDiscussion}></Form>
      <Discussions discussions={discussions} deleteDiscussion={deleteDiscussion}></Discussions>
    </>
  );
}

export default App;
