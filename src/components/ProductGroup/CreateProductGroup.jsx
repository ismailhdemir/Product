import { useState } from 'react'; // useState'i import et
import { createProductGroup } from '../../services/ApiService'; // API servisinden fonksiyonu import et

const CreateProductGroup = () => {
    const [groupName, setGroupName] = useState(''); // State y�netimi

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGroup = { name: groupName }; // Yeni �r�n grubu objesi olu�tur
        try {
            await createProductGroup(newGroup); // API �a�r�s�
            setGroupName(''); // Formu temizle
        } catch (error) {
            console.error("�r�n grubu olu�turulurken hata olu�tu:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Product Group</h2>
            <input
                type="text"
                placeholder="Product Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)} // Input de�i�imi
                required
            />
            <button type="submit">Create</button> {/* Buton */}
        </form>
    );
};

export default CreateProductGroup;
