import React from "react"
import List from "./list"
import SearchPanel from "./search-panel"
import { useState, useEffect } from "react"
import * as qs from "qs"
import { 
  // cleanObject,
   useMount } from "../../utils"

export const ProjectListScreen = () => {

  const [param, setParam] = useState({
    name: '',
    personId: ''
  }); 
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])


  useMount(() => {
    // fetch(`/api/projects/?${qs.stringify(cleanObject(param))}`).then(async response => {
    //   const result = await response.json()
    //   if (response.ok) {
    //     setList(result.projects || [])
    //   }
    // })
  })

  useEffect(() => {
    fetch('/api/users').then(async response => {
      const result = await response.json()
      if (response.ok) {
        setUsers(result.users || [])
      }
    })
  }, [])


  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}  />
      <List list={list} users={users} />
    </div>
  )
}