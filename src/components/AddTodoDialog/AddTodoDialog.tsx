import { useContext, useEffect, useRef, useState } from "react";
import { Dialog, DialogProps } from "../base/Dialog/Dialog";
import { Switch } from "../base/Switch/Switch";
import { InfoLink } from "./InfoLink/InfoLink";
import { MultipleForm, MultipleFormTodo } from "./MultipleForm/MultipleForm";
import { Button } from "../base/Button/Button";
import { SimpleForm } from "./SimpleForm/SimpleForm";
import { AppContext } from "../../context";
import { formatDate } from "../../helpers";
import { TodoStorageService } from "../../services/TodoStorageService";

export interface AddTodoDialogProps extends Omit<DialogProps, "children"> {}

export const AddTodoDialog = (
  props: AddTodoDialogProps
): React.ReactElement<AddTodoDialogProps> => {
  const add = useContext(AppContext).add;

  const [multiple, setMultiple] = useState(false);
  const [simpleValue, setSimpleValue] = useState("");
  const [multipleValue, setMultipleValue] = useState<MultipleFormTodo>({
    description: "",
  });

  const refText = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!multipleValue && refText.current) {
      refText.current.focus();
    }
  }, [multipleValue]);

  const onSave = () => {
    let priority, project, context, description, due;

    if (multiple) {
      description = multipleValue.description;
      due = multipleValue.due;
      priority = multipleValue.priority;
      project = multipleValue.project;
      context = multipleValue.context;
    } else {
      description = simpleValue;

      const match = simpleValue.match(
        /(\([A-Z]\)\s)?([\w\s]+)(\+[\w]+\s?)?(@[\w]+\s?)?(due:\d{4}-\d{2}-\d{2})?/
      );
      if (match) {
        description = match[2].trim();
        due = match[5]?.substring(4);
        priority = match[1]?.substring(1, 2);
        project = match[3]?.substring(1).trim();
        context = match[4]?.substring(1).trim();
      }
    }

    const newTodo = {
      id: new Date().getTime(),
      created_at: formatDate(new Date()),
      description,
      done: false,
      priority,
      project,
      context,
      due,
    };

    TodoStorageService.add(newTodo);
    add(newTodo);

    props.onClose();
  };

  useEffect(() => {
    if (props.open) {
      setSimpleValue("");
      setMultipleValue({
        description: "",
      });
    }
  }, [props.open]);

  return (
    <Dialog className="h-max w-11/12 p-5 rounded" {...props}>
      <div className="p-2 flex flex-col gap-6">
        <div className="flex justify-between">
          <InfoLink />

          <Switch
            label="Multiple fields"
            checked={multiple}
            onChange={(c) => setMultiple(c)}
          />
        </div>

        {!multiple && (
          <SimpleForm
            value={simpleValue}
            onChange={(v) => setSimpleValue(v)}
            onSubmit={onSave}
          />
        )}

        {multiple && (
          <MultipleForm
            value={multipleValue}
            onChange={(v) => setMultipleValue(v)}
            onSubmit={onSave}
          />
        )}

        <div className="flex gap-2 self-end">
          <Button variant="outlined" color="slate" onClick={props.onClose}>
            Discard
          </Button>
          <Button color="cyan" onClick={onSave}>
            Save
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
