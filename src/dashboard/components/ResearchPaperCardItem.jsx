import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2Icon, Trash2 } from 'lucide-react';
import GlobalApi from 'C:/Users/Manvi Upadhyay/Desktop/New folder/my-research-pal/services/GlobalApi.js';
import { toast } from 'sonner';

function ResearchPaperCardItem({ paper, refreshData }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    try {
      await GlobalApi.DeleteResearchPaperById(paper.id);
      toast.success('Research paper deleted successfully');
      refreshData();
    } catch (error) {
      console.error('Error deleting research paper:', error.response ? error.response.data : error.message);
      toast.error('Failed to delete research paper');
    } finally {
      setLoading(false);
      setOpenDialog(false);
    }
  };

  return (
    <div className='relative bg-white rounded-lg shadow-lg overflow-hidden'>
      <Link to={`/dashboard/researchPaper/${paper.id}/edit`}>
        <div
          className='p-6 bg-gradient-to-b from-purple-100 via-pink-100 to-red-100 rounded-t-lg'
          style={{ backgroundColor: paper.attributes?.themeColor }}
        >
          <h2 className='text-xl font-semibold text-gray-800'>{paper.attributes.title}</h2>
        </div>
      </Link>
      <div className='flex items-center justify-between p-4 bg-gray-200'>
        <h2 className='text-sm text-gray-700'>{paper.attributes.title}</h2>
        <Button
          onClick={() => setOpenDialog(true)}
          variant='destructive'
          className='p-2 rounded-full'
        >
          <Trash2 className='w-5 h-5' />
        </Button>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this research paper? All data will be lost.
            </DialogDescription>
            <div className='flex justify-end gap-4'>
              <Button onClick={() => setOpenDialog(false)} variant='ghost'>
                Cancel
              </Button>
              <Button onClick={onDelete} variant='destructive' disabled={loading}>
                {loading ? <Loader2Icon className='animate-spin' /> : 'Delete'}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ResearchPaperCardItem;