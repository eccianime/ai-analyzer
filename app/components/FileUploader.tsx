import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { formatSize } from '~/lib/utils';

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
  file: File | null;
}

export default function FileUploader({
  onFileSelect,
  file,
}: Readonly<FileUploaderProps>) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;
      onFileSelect?.(file);
    },
    [onFileSelect]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { 'application/pdf': ['.pdf'] },
    maxSize: 20 * 1024 * 1024,
  });

  return (
    <div className='w-full gradient-border'>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='space-y-4 cursor-pointer'>
          {file ? (
            <div
              className='uploader-selected-file'
              onClick={(e) => e.stopPropagation()}
            >
              <img src='/images/pdf.png' alt='PDF' className='size-10' />
              <div className='flex items-center space-x-3  '>
                <div>
                  <p className='text-sm font-medium text-gray-700 max-w-xs'>
                    {file.name}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                className='cursor-pointer p-2'
                onClick={() => onFileSelect?.(null)}
              >
                <img src='/icons/cross.svg' className='w-4 h-4' alt='remove' />
              </button>
            </div>
          ) : (
            <div>
              <div className='mx-auto w-16 h-16 flex items-center justify-center mb-2'>
                <img src='/icons/info.svg' className='size-20' alt='info' />
              </div>
              <p className='text-gray-500 text-lg'>
                <span className='font-semibold'>Click to upload</span> or drag
                and drop
              </p>
              <p className='text-gray-500 text-lg'>PDF (max 20 MB)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
