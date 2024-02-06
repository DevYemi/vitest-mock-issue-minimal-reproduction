import { vi } from "vitest";
import * as nextAuthReactModule from 'next-auth/react'



export const modObject = {
    ...nextAuthReactModule,
    useSession: vi.fn(),
    getSession: vi.fn(),
} 