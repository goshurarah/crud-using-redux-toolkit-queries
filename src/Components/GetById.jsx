import * as React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useGetPostByIdQuery } from "../services/Api";

function GetById() {
  const [ID, setID] = React.useState(1)
  let { isLoading, isError, data } = useGetPostByIdQuery(ID)
  return (
    <>
      {isLoading && <Grid
        container
        direction="row" description
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={3} sx={{
          minWidth: 'fit-content',
          width: '17rem',
          margin: '2rem',
          borderRadius: '1rem'
        }} >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value='Data is Loading...'
              label="Loading..."
              color="secondary"
              focused
            />
          </Box>
        </Paper>
      </Grid>}

      {isError && <Grid
        container
        direction="row" description
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={3} sx={{
          minWidth: 'fit-content',
          width: '17rem',
          margin: '2rem',
          borderRadius: '1rem'
        }} >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value='An Error Occured'
              label="Error"
              color="secondary"
              focused
            />
          </Box>
        </Paper>
      </Grid>}

      {data && <Grid
        container
        direction="row" description
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={3} sx={{
          minWidth: 'fit-content',
          width: '17rem',
          margin: '2rem',
          borderRadius: '1rem'
        }} >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={ID}
              onChange={(e) => setID(e.target.value)}
              label="Enter Specific Id"
              color="secondary"
              focused
            />
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={data.id}
              label="Id"
              color="secondary"
              focused
            />
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={data.title}
              label="Title"
              multiline
              rows={3}
              color="secondary"
              focused
            />
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={data.body}
              label="Body"
              multiline
              rows={3}
              color="secondary"
              focused
            />
          </Box>
        </Paper>
      </Grid>}
    </>
  );
}
export default GetById