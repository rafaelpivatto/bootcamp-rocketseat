const express = require('express')
const server = express()

server.use(express.json())

const projects = []
let numberOfRequests = 0

/**
 * Crie um middleware global chamado em todas requisições que imprime (console.log)
 * uma contagem de quantas requisições foram feitas na aplicação até então;
 */
server.use((req, res, next) => {
  numberOfRequests++
  console.log(`Quantity of requests: ${numberOfRequests}`)
  next()
})

/**
 * Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto
 * nos parâmetros da URL que verifica se o projeto com aquele ID existe.
 * Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;
 */
const checkProjectExists = (req, res, next) => {
  const { id } = req.params
  const project = projects.findIndex(p => p.id === id)

  if (project === -1) {
    return res.status(404).json({ error: 'Project does not exists' })
  }

  return next()
}

/**
 * POST /projects
 * A rota deve receber id e title dentro corpo de cadastrar um novo projeto
 * dentro de um array no seguinte formato:
 * { id: '1', title: 'Novo projeto', tasks: [] };
 */
server.post('/projects', (req, res) => {
  const { id, title } = req.body
  const project = {
    id,
    title,
    tasks: []
  }
  projects.push(project)

  return res.status(201).json({ project })
})

/**
 * GET /projects
 * Rota que lista todos projetos e suas tarefas;
 */
server.get('/projects', (req, res) => {
  return res.status(200).json({ projects })
})

/**
 * PUT /projects/:id
 * A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
 */
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params
  const { title } = req.body
  let project

  projects.forEach(p => {
    if (p.id === id) {
      p.title = title
      project = p
    }
  })

  return res.status(200).json({ project })
})

/**
 * DELETE /projects/:id:
 * A rota deve deletar o projeto com o id presente nos parâmetros da rota;
 */
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params
  const index = projects.findIndex(p => p.id === id)

  projects.splice(index, 1)

  return res.sendStatus(204)
})

/**
 * POST /projects/:id/tasks
 * A rota deve receber um campo title e armazenar uma nova tarefa no array de
 * tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
 */
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params
  const { title } = req.body
  let project

  projects.forEach(p => {
    if (p.id === id) {
      p.tasks.push(title)
      project = p
    }
  })

  return res.status(201).json({ project })
})

server.listen(3000)
