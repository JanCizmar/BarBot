import {Form, redirect} from "remix";
import {createPub} from "../../service/pubService";

export const action = async ({request}: any) => {
  const formData = await request.formData();
  const name = formData.get("name");
  await createPub({name});
  return redirect("/pubs");
};

export default function NewPost() {
  return (
    <Form method="post">
      <p>
        <label>
          Pub name: <input type="text" name="name"/>
        </label>
      </p>
      <p>
        <button type="submit">Create Pub</button>
      </p>
    </Form>
  );
}
