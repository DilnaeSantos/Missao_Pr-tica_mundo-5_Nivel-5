const contracts = [
  { id: 1, title: 'Contrato A', description: 'Descrição do contrato A', status: 'ativo' },
  { id: 2, title: 'Contrato B', description: 'Descrição do contrato B', status: 'inativo' },
];

function getAllContracts(req, res) {
  res.status(200).json({ contracts });
}

function getContractById(req, res) {
  const contractId = parseInt(req.params.id);
  const contract = contracts.find(c => c.id === contractId);
  if (!contract) {
    return res.status(404).json({ message: 'Contrato não encontrado.' });
  }
  res.status(200).json({ contract });
}

export default {
  getAllContracts,
  getContractById
};