import { CreditCardIcon, Store } from "lucide-react";
import { Button } from "../ui/button";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { auth } from "@/lib/auth";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { NewOrganization } from "./new-organization";

export function Organization() {
  const { data } = auth.useListOrganizations();
  const { data: activeOrganization } = auth.useActiveOrganization();

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Organização</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent side="top" className="min-w-56">
          <DropdownMenuGroup>
            {Array.isArray(data) && data.length > 0 ? (
              <DropdownMenuRadioGroup
                value={activeOrganization?.id}
                onValueChange={setPaymentMethod}
              >
                {data?.map((organization) => (
                  <DropdownMenuRadioItem value={organization.id}>
                    <CreditCardIcon className="mr-2 h-4 w-4" />
                    {organization.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            ) : (
              <DropdownMenuLabel>Sem organizações</DropdownMenuLabel>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <DialogTrigger asChild>
                <Button variant="secondary">
                  <Store />
                  Criar nova organização
                </Button>
              </DialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <NewOrganization />
    </Dialog>
  );
}
