import React from "react"
import List from "./list"
import SearchPanel from "./search-panel"
import { useState, useEffect } from "react"
import * as qs from "qs"
import {
  cleanObject,
  useMount
} from "../../utils"
import styled from "@emotion/styled"

export const ProjectListScreen = () => {

  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])


  useEffect(() => {
    fetch(`/api/projects/?${qs.stringify(cleanObject(param))}`).then(async response => {
      const result = await response.json()
      if (response.ok) {
        if (param.name != "" || param.personId != "") {
          let projectsData = result.projects.filter((data) => {
            return data && data.name.includes(param.name) && (data.personId == param.personId)
          })
          setList(projectsData || [])
        }
        else { setList(result.projects || []) }
      }
    })
  }, [param])

  useMount(() => {
    fetch('/api/users').then(async response => {
      const result = await response.json()
      if (response.ok) {
        setUsers(result.users || [])
      }
    })
  })


  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </Container>
  )

}
const Container = styled.div`
  padding:3.2rem
`