import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2Icon, PlusSquare } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from 'C:/Users/Manvi Upadhyay/Desktop/New folder/my-research-pal/services/GlobalApi.js';
import { useUser } from '@clerk/clerk-react';
import { toast } from 'sonner';

function AddResearchPaper({ refreshData }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [researchTitle, setResearchTitle] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const onCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: researchTitle,
        edit: researchTitle,
        description: description,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        paperId: uuid,
      }
    };

    try {
      const resp = await GlobalApi.CreateResearchPaper(data);
      console.log('Create research paper response:', resp);
      
      setLoading(false);
      setOpenDialog(false);
      toast.success('Research paper created successfully');
      refreshData(); // This will update the dashboard with the new card
    } catch (error) {
      setLoading(false);
      console.error('Error creating research paper:', error);
      console.error('Error details:', error.response?.data);
      toast.error('Failed to create research paper');
    }
  };

  return (
    <div className='w-full max-w-xs'>
      <div
        className='flex items-center justify-center p-6 bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-all'
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare className='text-white text-4xl' />
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Research Paper</DialogTitle>
            <DialogDescription>
              <p className='mb-2'>Add details for your new research paper</p>
              <Input
                className='w-full mb-4'
                placeholder='Title: Ex. Machine Learning Research'
                value={researchTitle}
                onChange={(e) => setResearchTitle(e.target.value)}
              />
              <Textarea
                className='w-full mb-4'
                placeholder='Description (optional)'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </DialogDescription>
            <div className='flex justify-end gap-4'>
              <Button onClick={() => setOpenDialog(false)} variant='ghost'>
                Cancel
              </Button>
              <Button disabled={!researchTitle || loading} onClick={onCreate}>
                {loading ? <Loader2Icon className='animate-spin' /> : 'Create'}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResearchPaper;