import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import {Button , TableRow, Table, TableHead, TableCell, TableBody } from '@aws-amplify/ui-react';
import {ItemCreateForm} from '../ui-components'

const client = generateClient<Schema>();

function App() {

  const [Items, setItems] = useState<Array<Schema["Item"]["type"]>>([]);
  const [itemVisible, setItemVisible] = useState(false);

  useEffect(() => {
    client.models.Item.observeQuery().subscribe({
      next: (data) => setItems([...data.items]),
    });
  });

  async function displayItem() {
    try {
      setItemVisible(true)
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }
  
  const formFields = {
    signUp: {
      "custom:tenant_id": {
        label: 'Input Tenant',
        order: 1
      }
    }
  };

  return (
  <div >
      <Authenticator  formFields={formFields}>
      {({ signOut }) => (
        <main>        
          <h1>アイテムマスタ</h1>
          <button onClick={displayItem}>新規登録</button>
          <ItemCreateForm style={{ display: itemVisible ? "block" : "none" }}/>
          <Table
            caption=""
            highlightOnHover={false}>
            <TableHead>
              <TableRow>
              <TableCell as="th"></TableCell>
                <TableCell as="th">アイテムコード</TableCell>
                <TableCell as="th">アイテム名</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Items.map((Item) => (      
                <TableRow key={Item.id}>
                  <TableCell > <Button>ラベル発行</Button></TableCell> 
                    <TableCell >{Item.ItemCode}</TableCell >
                    <TableCell >{Item.ItemName}</TableCell >
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
          <button onClick={signOut}>Sign out</button>
        </main>

      )}
    </Authenticator>
    </div>
  );
}

export default App;
