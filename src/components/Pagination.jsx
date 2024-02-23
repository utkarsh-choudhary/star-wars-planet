// components/Pagination.js
import React from 'react';
import { Button } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Pagination = ({ handlePrevPage, handleNextPage, currentPage, totalPages }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4 vw-100" >
      
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Previous
        </Button>
      
      <span>Page {currentPage} of {totalPages}</span>
      <div>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForward />}
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
