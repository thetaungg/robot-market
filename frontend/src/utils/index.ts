export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(value);
};

export const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('nl', { year: 'numeric', month: '2-digit', day: '2-digit' });
};
