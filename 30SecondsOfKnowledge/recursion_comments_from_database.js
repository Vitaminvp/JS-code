const nest = (items, id = null, link = "parent_id") =>
items
    .filter(item => item[link] === id)
.map(item => ({ ...item, children: nest(items, item.id) }))

const comments = [
    { id: 1, parent_id: null, text: "First reply to post." },
    { id: 2, parent_id: 1, text: "First reply to comment #1." },
    { id: 3, parent_id: 1, text: "Second reply to comment #1." },
    { id: 4, parent_id: 3, text: "First reply to comment #3." },
    { id: 5, parent_id: 4, text: "First reply to comment #4." },
    { id: 6, parent_id: null, text: "Second reply to post." }
]

nest(comments);
/*
[
  { id: 1, parent_id: null, text: "First reply to post.", children: [...] },
  { id: 6, parent_id: null, text: "Second reply to post.", children: [] }
]
*/
