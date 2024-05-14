import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CreateTask, updateTask } from "@/actions/tasks-actions"
import { Task } from "@prisma/client"

export function TaskForm({task}: {task:Task}) {

  const functionAction = task?.id ? updateTask : CreateTask;

  return (
    <form action={functionAction}>
      <input type="hidden" name="id" value={task?.id} />
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Crear proyecto</CardTitle>
        <CardDescription>Rellena el formulario de abajo.</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nombre">Nombre</Label>
              <Input name="nombre" id="nombre" placeholder="Nombre de tu proyecto" 
              defaultValue={task?.nombre}
              />
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="descripcion">Descripcion</Label>
              <Textarea name="descripcion" id="descripcion" placeholder="Descripcion de la tarea" 
              defaultValue={task?.descripcion || ""}
              />
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="prioridad">Prioridad</Label>
              <Select name="prioridad" defaultValue={task?.prioridad}>
                <SelectTrigger  id="prioridad">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Bajo">Bajo</SelectItem>
                  <SelectItem value="Medio">Medio</SelectItem>
                  <SelectItem value="Alto">Alto</SelectItem>
                  <SelectItem value="Urgente">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Crea tarea</Button>
      </CardFooter>
    </Card>
    </form>
  )
}
