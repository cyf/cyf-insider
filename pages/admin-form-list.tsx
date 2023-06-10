'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { Card, Title, Text } from "@tremor/react";
import Search from "@/components/shared/search";
import UsersTable from "@/components/shared/table";
import type { User } from "@/components/shared/table";

export default function AdminFormList() {
  const params = useSearchParams();
  const q = params?.get('q');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const paramStr = q ? `?${(new URLSearchParams({
      email: q,
    })).toString()}` : "";
    fetch(`/api/list/admin${paramStr}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      if (res.status === 200) {
        const { data } = await res.json();
        setUsers(data);
      } else {
        const { error } = await res.json();
      }
    });
  }, [q]);

  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <Title className="text-gray-700 text-3xl font-normal">Users</Title>
      <Text className="text-gray-500 text-sm font-normal">
        A list of users retrieved from a PostgreSQL database.
      </Text>
      <Search />
      <Card className="mt-6 ring-0 p-0 pt-6 pb-6">
        <UsersTable users={users} />
      </Card>
    </div>
  );
}
