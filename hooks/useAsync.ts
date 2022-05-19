import { useState, useCallback } from "react";

type AsyncStatus = "idle" | "pending" | "success" | "error";

export interface UseAsync<Args extends Array<unknown>, Return = any, Err = Error> {
  status: AsyncStatus;
  value: Return | null;
  error: Err | null;
  execute: (...args: Args) => Promise<Return>;
  throwErr(error: any): void;
}

export function useAsync<Args extends Array<unknown>, Return = any, Err = Error>(
  asyncFunction: (...args: Args) => Promise<Return>
): UseAsync<Args, Return, Err> {
  const [status, setStatus] = useState<AsyncStatus>("idle");
  const [value, setValue] = useState<Return>(null);
  const [error, setError] = useState<Err>(null);

  const execute = useCallback(
    async (...args: Args) => {
      setStatus("pending");
      setValue(null);
      setError(null);
      try {
        const response = await asyncFunction(...args);
        setValue(response);
        setStatus("success");

        return response;
      } catch (error) {
        setError(error);
        setStatus("error");
      }
    },
    [asyncFunction]
  );

  const throwErr = (error: any) => {
    setError(error);
    setStatus("error");
  };

  return { execute, status, value, error, throwErr };
}
