'use client';
import { Span } from 'next/dist/trace';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import { IoAddSharp, IoPencil, IoTrashOutline } from 'react-icons/io5';
import { clsx } from 'clsx';
import { deleteContact } from '@/lib/action';

export const CreateButton = () => {
  return (
    <Link href={'/contacts/create'} className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/contacts/edit/${id}`} className=" rounded-sm border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteContactWithID = deleteContact.bind(null, id);
  return (
    <form action={DeleteContactWithID}>
      <button className=" rounded-sm border p-1 hover:bg-gray-100">
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx('text-white bg-blue-700 hover:bg-blue-800 rounded-sm text-sm w-full py-3 px-5 text-center', {
    'opacity-50 cursor-progress': pending,
  });

  return (
    <button type="submit" className={className} disabled={pending}>
      {label === 'save' ? <span>{pending ? 'Saving ...' : 'Save'}</span> : <span>{pending ? 'Updating ...' : 'Update'}</span>}
    </button>
  );
};