export const useEditProject = (id,project)=>{
    const mutate = (params)=>{
        fetch(`/api/projects/${params.id}`,{
            method:"PATCH",
            data: params,

        }).then(async response => {
               if(response.ok){
                
               }
          })
    }

  return {mutate}

}