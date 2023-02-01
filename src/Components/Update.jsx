import * as React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

import { useParams, useNavigate } from 'react-router-dom'
import { useGetPostByIdQuery, useUpdateMutation, useGetAllPostQuery } from "../services/Api"

function Post() {
  const { id } = useParams()
  const { data } = useGetPostByIdQuery(id)
  const [UpdateFunc] = useUpdateMutation()
  let { refetch } = useGetAllPostQuery()
  const [stateData, setStateData] = React.useState({
    title: null,
    body: null
  })
  let navigate = useNavigate()
  
  const ApiData = () => {
    if (data) {
      setStateData({
        title: data.title,
        body: data.body
      })
    }
  }
  React.useEffect(() => {
    ApiData()
  }, [data])

  const updatePostData = {
    id: id,
    title: stateData.title,
    body: stateData.body
  }

  return (
    <>
      <Paper elevation={9} sx={{
        padding: '1rem',
        margin: '2rem 10rem',
        borderRadius: '2rem'
      }} >
        <Typography variant='h3' color="secondary.main" sx={{ textAlign: 'center' }}>UPDATE</Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <form>
              <TextField
                value={stateData.title}
                onChange={(e) => setStateData({
                  ...stateData,
                  title: e.target.value
                })}
                // id="outlined-multiline-flexible"
                label="Title"
                multiline
                rows={1}
                color="secondary"
                focused
              />
              <TextField
                value={stateData.body}
                onChange={(e) => setStateData({
                  ...stateData,
                  body: e.target.value
                })}
                // id="outlined-multiline-flexible"
                label="Body"
                multiline
                rows={3}
                color="secondary"
                focused
              />
              <Box sx={{ display: 'flex', justifyContent: "center", pb: '1rem' }}>
                <Button
                  size="medium" variant="outlined" color="secondary"
                  type="submit"
                  onClick={(e) => {
                    UpdateFunc(updatePostData)
                    e.preventDefault()
                    refetch()
                    navigate('/')
                  }}
                >
                  UPDATE
                </Button>
              </Box>
            </form>
          </div>
        </Box>
      </Paper>
    </>
  );
}
export default Post