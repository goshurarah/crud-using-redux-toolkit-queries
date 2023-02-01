import * as React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'
import { usePostMutation, useGetAllPostQuery } from "../services/Api"

function Post() {
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')
  let [PostFunc] = usePostMutation()
  let { refetch } = useGetAllPostQuery()
  let navigate = useNavigate()

  const postData = {
    title: title,
    body: body
  }

  function inputUpdate() {
    setTitle('')
    setBody('')
  }
  return (
    <>
      <Paper elevation={9} sx={{
        padding: '1rem',
        margin: '2rem 10rem',
        borderRadius: '2rem'
      }} >
        <Typography variant='h3' color="secondary.main" sx={{ textAlign: 'center' }}>POST</Typography>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // id="outlined-multiline-flexible"
                label="Title"
                multiline
                rows={1}
                color="secondary"
                required
              />
              <TextField
                value={body}
                onChange={(e) => setBody(e.target.value)}
                // id="outlined-multiline-flexible"
                label="Body"
                multiline
                rows={3}
                color="secondary"
                required
              />
              <Box sx={{ display: 'flex', justifyContent: "center", pb: '1rem' }}>
                <Button
                  disabled={title === '' || body === '' ? true : false}
                  size="medium" variant="outlined" color="secondary"
                  type="submit"
                  onClick={(e) => {
                    PostFunc(postData)
                    e.preventDefault()
                    inputUpdate()
                    refetch()
                    navigate('/')
                  }}
                >
                  POST
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