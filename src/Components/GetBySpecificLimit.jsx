import * as React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { useGetPostBySpecificLimitQuery } from "../services/Api";

function GetBySpecificLimit() {
  const [number, setNumber] = React.useState(1)
  let { isLoading, isError, data } = useGetPostBySpecificLimitQuery(number)
  return (
    <>
      <Grid
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              label="Enter Limit Number"
              color="secondary"
              focused
            />
          </Box>
        </Paper>
      </Grid>

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
        {data.map((items) => {
          return (
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
                  value={items.id}
                  label="Id"
                  color="secondary"
                  focused
                />
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={items.title}
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
                  value={items.body}
                  label="Body"
                  multiline
                  rows={3}
                  color="secondary"
                  focused
                />
              </Box>
            </Paper>
          )
        })}
      </Grid>}
    </>
  );
}
export default GetBySpecificLimit