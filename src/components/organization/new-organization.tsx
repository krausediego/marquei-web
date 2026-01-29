import { Controller } from "react-hook-form";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { useNewOrganization } from "@/hooks/use-new-organization";
import { Button } from "../ui/button";

export function NewOrganization() {
  const { form, mutateAsync } = useNewOrganization();

  return (
    <DialogContent className="overflow-y-scroll max-h-[calc(100vh/1.2)]">
      <DialogHeader>
        <DialogTitle>Criar nova organização</DialogTitle>
      </DialogHeader>

      <form
        onSubmit={form.handleSubmit((values) => mutateAsync(values))}
        id="new-organization"
        className="space-y-2"
      >
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="name">Nome da Organização</FieldLabel>
              <Input
                {...field}
                id="name"
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Insira o nome da organização"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="slug"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="slug">Slug</FieldLabel>
              <Input
                {...field}
                id="slug"
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Insira o slug"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="description">Descrição</FieldLabel>
              <Input
                {...field}
                id="description"
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Insira a descrição"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="phone">Telefone</FieldLabel>
              <Input
                {...field}
                id="phone"
                type="tel"
                aria-invalid={fieldState.invalid}
                placeholder="Insira o telefone"
                autoComplete="tel"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="number"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="number">Número</FieldLabel>
              <Input
                {...field}
                id="number"
                type="number"
                aria-invalid={fieldState.invalid}
                placeholder="Insira o número"
                autoComplete="off"
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="street"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="street">Rua</FieldLabel>
              <Input
                {...field}
                id="street"
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Insira a rua"
                autoComplete="street-address"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="district"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="district">Bairro</FieldLabel>
              <Input
                {...field}
                id="district"
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Insira o bairro"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="city"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="city">Cidade</FieldLabel>
              <Input
                {...field}
                id="city"
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Insira a cidade"
                autoComplete="address-level2"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="state"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="state">Estado</FieldLabel>
              <Input
                {...field}
                id="state"
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Insira o estado"
                autoComplete="address-level1"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="location.x"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="location.x">Coordenada X</FieldLabel>
              <Input
                {...field}
                id="location.x"
                type="number"
                step="any"
                aria-invalid={fieldState.invalid}
                placeholder="Insira a coordenada X"
                autoComplete="off"
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="location.y"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.error}>
              <FieldLabel htmlFor="location.y">Coordenada Y</FieldLabel>
              <Input
                {...field}
                id="location.y"
                type="number"
                step="any"
                aria-invalid={fieldState.invalid}
                placeholder="Insira a coordenada Y"
                autoComplete="off"
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button type="submit" form="new-organization" className="w-full">
          Cadastrar
        </Button>
      </form>
    </DialogContent>
  );
}
