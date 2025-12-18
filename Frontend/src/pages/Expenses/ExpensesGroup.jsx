import { useState, useEffect } from 'react';
import { Users, Plus, UserPlus, Divide, DollarSign, X } from 'lucide-react';

export default function ExpensesGroup() {
    const [groups, setGroups] = useState([]); // List of user's groups
    const [activeGroup, setActiveGroup] = useState(null); 
    const [newGroupName, setNewGroupName] = useState('');
    const [newGroupNametype, setNewGroupNametype] = useState('');
    const [newMemberUsername, setNewMemberUsername] = useState('');
    const [expenseDescription, setExpenseDescription] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState(new Date().toISOString().split('T')[0]);
    const [splitType, setSplitType] = useState('equal'); // 'equal' or 'unequal'

    const [isModalOpen, setIsModalOpen] = useState(null); // 'createGroup', 'addMember', 'addExpense'
    
    useEffect(() => {
        setGroups([
            { id: 1, name: 'Roommates', members: ['Alice', 'Bob', 'You'], creator: 'You' },
            { id: 2, name: 'Trip to Manali', members: ['You', 'Charlie'], creator: 'Charlie' },
        ]);
        setActiveGroup(1); // Set a default active group
    }, []);

    const handleCreateGroup = (e) => {
        e.preventDefault();
        console.log("Creating Group:", newGroupName);
        setNewGroupName('');
        // setNewGroupNametype('');
        setIsModalOpen(null);
    };

    const handleAddMember = (e) => {
        e.preventDefault();
        if (!activeGroup) return;
        // Django API POST /api/groups/{id}/add_member/
        console.log(`Adding ${newMemberUsername} to Group ${activeGroup}`);
        setNewMemberUsername('');
        setIsModalOpen(null);
    };

    const handleAddExpense = (e) => {
        e.preventDefault();
        if (!activeGroup) return;

        const expenseData = {
            group_id: activeGroup,
            description: expenseDescription,
            amount: parseFloat(expenseAmount),
            date: expenseDate,
            splitType: splitType,
            // You will need to calculate the splits here or send split details to the server
        };
        // Django API POST /api/expenses/add/
        console.log("Adding Expense:", expenseData);
        
        // Reset form
        setExpenseDescription('');
        setExpenseAmount('');
        setSplitType('equal');
        setIsModalOpen(null);
    };

    const selectedGroup = groups.find(g => g.id === activeGroup);

    return (
        <div className="p-6 dark:bg-blue-950 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <Users size={32} /> Group Expense Management
            </h1>
            
            {/* === ACTION BUTTONS AND GROUP LIST === */}
            <div className="flex items-center space-x-4 mb-8">
                <button 
                    onClick={() => setIsModalOpen('createGroup')}
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    <Plus size={20} className="mr-2" /> Create Group
                </button>
                {activeGroup && (
                    <>
                        <button 
                            onClick={() => setIsModalOpen('addMember')}
                            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            <UserPlus size={20} className="mr-2" /> Add Member
                        </button>
                        <button 
                            onClick={() => setIsModalOpen('addExpense')}
                            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                        >
                            <DollarSign size={20} className="mr-2" /> Add Expense
                        </button>
                    </>
                )}
            </div>

            {/* === GROUP SELECTOR / DASHBOARD === */}
            {selectedGroup && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                        Viewing: {selectedGroup.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Members: {selectedGroup.members.join(', ')}
                    </p>
                    {/* Placeholder for Group Summary/Transactions List */}
                    <div className="mt-4 p-4 border rounded-lg border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                        *Group transaction list and balances will go here.*
                    </div>
                </div>
            )}


            {/* === MODALS (Forms) === */}
            {isModalOpen && (
                <Modal title={
                    isModalOpen === 'createGroup' ? 'Create New Group' :
                    isModalOpen === 'addMember' ? `Add Member to ${selectedGroup?.name}` :
                    'Add Group Expense'
                } onClose={() => setIsModalOpen(null)}>
                    {/* 1. Create Group Form */}
                    {isModalOpen === 'createGroup' && (
                        <form onSubmit={handleCreateGroup} className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Group Name</label>
                            <input
                                type="text"
                                value={newGroupName}
                                onChange={(e) => setNewGroupName(e.target.value)}
                                placeholder="e.g., Hiking Club, Roommates"
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                required
                            />
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                            <input
                                type="text"
                                value={newGroupNametype}
                                onChange={(e) => setNewGroupNametype(e.target.value)}
                                placeholder="e.g.trip, home .."
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                required
                            />
                            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                                Create
                            </button>
                        </form>
                    )}

                    {/* 2. Add Member Form */}
                    {isModalOpen === 'addMember' && selectedGroup && (
                        <form onSubmit={handleAddMember} className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Member Username</label>
                            <input
                                type="text"
                                value={newMemberUsername}
                                onChange={(e) => setNewMemberUsername(e.target.value)}
                                placeholder="Enter username to invite"
                                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                required
                            />
                            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">
                                Add Member
                            </button>
                        </form>
                    )}
                    
                    {/* 3. Add Expense Form (Split Equally/Unequally) */}
                    {isModalOpen === 'addExpense' && selectedGroup && (
                        <form onSubmit={handleAddExpense} className="space-y-4">
                            
                            {/* Input Fields */}
                            <input type="text" value={expenseDescription} onChange={e => setExpenseDescription(e.target.value)} placeholder="Description (e.g., Dinner)" className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white" required />
                            <input type="number" value={expenseAmount} onChange={e => setExpenseAmount(e.target.value)} placeholder="Amount (₹)" className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white" required />
                            <input type="date" value={expenseDate} onChange={e => setExpenseDate(e.target.value)} className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white" required />

                            {/* Split Type Toggle */}
                            <div className="flex space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setSplitType('equal')}
                                    className={`flex-1 py-2 rounded-lg font-semibold ${splitType === 'equal' ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                                >
                                    <Divide size={16} className="inline mr-1" /> Split Equally
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSplitType('unequal')}
                                    className={`flex-1 py-2 rounded-lg font-semibold ${splitType === 'unequal' ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                                >
                                    Split Unequally
                                </button>
                            </div>

                            {/* Unequal Split Detail (Conditional Rendering) */}
                            {splitType === 'unequal' && (
                                <div className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg border border-yellow-200 dark:border-yellow-700">
                                    <p className="text-sm font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                                        Manual Split Required:
                                    </p>
                                    {/* Map over members to allow manual input for each */}
                                    {selectedGroup.members.map(member => (
                                        <div key={member} className="flex justify-between items-center mt-2">
                                            <label className="text-gray-700 dark:text-gray-300">{member} owes:</label>
                                            <input type="number" placeholder="Amount" className="w-1/3 p-1 border rounded-lg dark:bg-gray-700 dark:text-white" />
                                        </div>
                                    ))}
                                    <p className="text-xs mt-2 text-red-500">*Total must equal the expense amount.*</p>
                                </div>
                            )}

                            <button type="submit" className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">
                                Record Expense
                            </button>
                        </form>
                    )}
                </Modal>
            )}
        </div>
    );
}

// === Reusable Modal Component (Place outside or in a separate file) ===
const Modal = ({ children, title, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-center items-center">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-md relative">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800 dark:text-white">{title}</h3>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                <X size={24} />
            </button>
            {children}
        </div>
    </div>
);